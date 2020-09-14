#!/usr/bin/python3
"""
return the list of user and task that were done
"""

import requests
from sys import argv

if __name__ == '__main__':
    user_id = argv[1]
    listx = []
    get_user = requests.get("https://jsonplaceholder.typicode.com/users/{}".
                            format(user_id)).json()
    todo = requests.get("https://jsonplaceholder.typicode.com/todos?userId={}"
                         .format(user_id)).json()
    for task in todo:
        if task.get('completed'):
            listx.append(task.get('title'))
    print("Employee {} is done with tasks({}/{}):".
          format(get_user.get('name'), len(listx), len(todo)))
    for i in listx:
        print("\t{}".format(i))
