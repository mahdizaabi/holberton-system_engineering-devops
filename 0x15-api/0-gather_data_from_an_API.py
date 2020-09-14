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
                            format(user_id), verify=False).json()
    tasks = requests.get("https://jsonplaceholder.typicode.com/todos?userId={}"
                         .format(user_id, verify=False)).json()
    for task in tasks:
        if task.get('completed'):
            listx.append(task.get('title'))
    print("Employee {} is done with tasks({}/{}):".
          format(get_user.get('name'), len(listx), len(tasks)))
    print("\n".join("\t {}".format(task) for task in listx))
