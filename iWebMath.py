from flask import Flask, request, jsonify, abort, current_app, g as app_ctx
import json, uuid, numpy as np, time, threading

app = Flask(__name__)
app.config["DEBUG"] = True

""" class NewThreadedTask(threading.Thread):
     def __init__(self):
         super(NewThreadedTask, self).__init__()
 
     def run(self):
         # run some code here
         print('Threaded task has been completed') """

def print_elapsed_time():
    return time.perf_counter()

def generate_request_id(request_id=''):
    response_id = uuid.uuid4()

    if request_id:
        response_id = "{}{}".format(request_id, response_id)

    return response_id

@app.route('/api/iwebmath/matrix_trace/', methods=['POST'])
def generateMatrix():
    start_time = print_elapsed_time()
    #print(start_time)

    request_data = request.get_json()

    """ new_thread = NewThreadedTask()
    new_thread.start()
    # optionally wait for task to complete
    new_thread.join() """
    
    if request_data:
        request_id = int(request_data['id'])
        #response_id = generate_request_id(request_id)
        matrixSize  = int(request_data['file']['matrixSize'])
        seed = int(request_data['file']['seed'])
        np.random.seed(seed)
        matrix = np.random.random((matrixSize, matrixSize))
        transpose = np.transpose(matrix)
        dot_product = (matrix * matrix) * (transpose * matrix)
        trace = dot_product.trace()
        processing_time = round(time.perf_counter() - start_time, 2)
    return  jsonify({
        'id': request_id,
        'results': trace,
        'processing_time': str(processing_time) + "s"
    })

if __name__ == '__main__':
    app.run(threaded=True, debug=True, host='0.0.0.0', port=5000)