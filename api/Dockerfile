FROM python:3.8

WORKDIR /app

RUN mkdir transformed_data
RUN pip install --upgrade pip
RUN pip install Flask flask-cors matplotlib pandas numpy pyarrow

COPY . .

CMD [ "python", "server.py" ]
