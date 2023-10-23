from chalice import Chalice

app = Chalice(app_name='defaulter-api')

@app.route('/defaulters', methods=['GET'])
def get_defaulters():
    # this function can be extended further based on the data provided
    defaulters = ['Student1', 'Student2', 'Student3']
    return {'defaulters': defaulters}
