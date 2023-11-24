import pandas as pd

wind_farms = {
  'a': [str(i + 1) for i in range(8)],
  'b': [str(i + 1) for i in range(4)],
  'c': [str(i + 1) for i in range(12)],
  'd': [str(i + 1) for i in range(4)],
  'e': [str(i + 1).zfill(2) for i in range(2, 38)],
}

class FacilityDataFrame:
  def __init__(self, facility: int, wind_farm: str, data_frame: pd.DataFrame):
    self.facility = f'Anlage {facility}'
    self.wind_farm = f'Windpark {wind_farm.capitalize()}'
    self.df = data_frame
