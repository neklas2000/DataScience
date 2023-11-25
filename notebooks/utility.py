import pandas as pd

wind_farms = {
  'a': [str(i + 1) for i in range(8)],
  'b': [str(i + 1) for i in range(4)],
  'c': [str(i + 1) for i in range(12)],
  'd': [str(i + 1) for i in range(4)],
  'e': [str(i + 1).zfill(2) for i in range(2, 38)],
}

month_mapping = {
  1: 'Januar',
  2: 'Februar',
  3: 'März',
  4: 'April',
  5: 'Mai',
  6: 'Juni',
  7: 'Juli',
  8: 'August',
  9: 'September',
  10: 'Oktober',
  11: 'November',
  12: 'Dezember',
}
