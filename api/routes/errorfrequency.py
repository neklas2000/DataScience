import os
import pandas as pd
from flask import Blueprint, request, jsonify
from flask_cors import CORS
import matplotlib.pyplot as plt
from io import BytesIO
import base64

errorfrequency_bp=Blueprint('errorfrequency', __name__)
CORS(errorfrequency_bp)

@errorfrequency_bp.route('/errorfrequency', methods=['GET'])
def errorfrequency():
  wind_farm=request.args.get('farm')
  facility=request.args.get('facility')
  year=int(request.args.get('year'))

  cwd=os.getcwd()

  feather_file=f'{cwd}/transformed_data/wind_farm_{wind_farm}/facility_{facility}.feather'

  df=pd.read_feather(feather_file)
  facility_text=f'Anlage {facility}'
  wind_farm_text=f'Windpark {wind_farm.capitalize()}'

  df['DateTime'] = pd.to_datetime(
    df['DateTime'],
    errors='coerce',
    format='%Y-%m-%dT%H:%M:%S.%f%z',
    utc=True
  )

  df_year=df[df['DateTime'].dt.year == year]
  error_frequency=df_year['Fehlernummer'].value_counts()
  error_frequency.plot(kind='bar', figsize=(6.4, 8.5))
  plt.xlabel('Fehlernummer')
  plt.ylabel('Häufigkeit')
  plt.title(f'Häufigkeit der Fehlernummern der {facility_text} im {wind_farm_text} ({year})')

  img_buf=BytesIO()
  plt.savefig(img_buf, format='png')
  img_buf.seek(0)

  img_base64=base64.b64encode(img_buf.read()).decode('utf-8')

  plt.close()

  return jsonify({
    'image': img_base64
  })
