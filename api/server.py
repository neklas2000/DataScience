from flask import Flask
from routes.windspeed import windspeed_bp
from routes.errorfrequency import errorfrequency_bp

app=Flask(__name__)

app.register_blueprint(windspeed_bp, url_prefix='/api')
app.register_blueprint(errorfrequency_bp, url_prefix='/api')

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0')
