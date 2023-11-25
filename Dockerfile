FROM continuumio/anaconda3:latest
RUN /opt/conda/bin/conda install jupyter -y --quiet
RUN mkdir /opt/notebooks /opt/original_data /opt/transformed_data
EXPOSE 8888
CMD /opt/conda/bin/jupyter notebook --ip='*' --port=8888 --no-browser --allow-root --NotebookApp.token=''
WORKDIR /opt/notebooks
