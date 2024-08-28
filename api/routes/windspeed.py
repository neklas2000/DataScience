import os
import pandas as pd
import numpy as np
from flask import Blueprint, request, jsonify
from flask_cors import CORS
import matplotlib.pyplot as plt
from io import BytesIO
import base64

from scripts.constants import month_mapping

windspeed_bp=Blueprint('windspeed', __name__)
CORS(windspeed_bp)

@windspeed_bp.route('/windspeed', methods=['GET'])
def windspeed():
  wind_farm=request.args.get('farm')
  facility=request.args.get('facility')
  year=int(request.args.get('year'))

  cwd=os.getcwd()

  feather_file = f'{cwd}/transformed_data/wind_farm_{wind_farm}/facility_{facility}.feather'
  df = pd.read_feather(feather_file)
  df['DateTime'] = pd.to_datetime(df['DateTime'], errors='coerce', format='%Y-%m-%dT%H:%M:%S.%f%z', utc=True)
  df2=df[df['DateTime'].dt.year == year]

  df2 = df2.assign(Month=df2['DateTime'].dt.month)

  df3 = df2.groupby(['Month'])['Windgeschwindigkeit'].mean().reset_index()
  df3["Leistung"] = df2.groupby(['Month'])['Leistung'].mean().reset_index()["Leistung"]

  fig, ax1 = plt.subplots(figsize=(10, 10))

  month_labels = df3['Month'].map(month_mapping)

  ax1.bar(np.arange(len(month_labels)) - 0.2, df3['Windgeschwindigkeit'], color='b', label='Windgeschwindigkeit',width=0.4)
  ax1.set_xlabel('Monat')
  ax1.set_ylabel('Windgeschwindigkeit (m/s)', color='b')
  ax1.set_xticks(np.arange(len(month_labels)))
  ax1.set_xticklabels(month_labels, rotation=45,ha="right")
  ax1.tick_params('y', colors='b')

  ax2 = ax1.twinx()
  ax2.bar(np.arange(len(month_labels)) + 0.2, df3['Leistung'], color='r', label='Leistung',width=0.4)
  ax2.set_ylabel('Leistung (kW)', color='r')
  ax2.tick_params('y', colors='r')

  plt.title(f'Korrelation: Windgeschwindigkeit zu Leistung der Anlage {facility} im Windpark {wind_farm.capitalize()} über das Jahr {year}')

  img_buf=BytesIO()
  plt.savefig(img_buf, format='png')
  img_buf.seek(0)

  img_base64=base64.b64encode(img_buf.read()).decode('utf-8')

  plt.close()

  return jsonify({
    'image': img_base64
  })
