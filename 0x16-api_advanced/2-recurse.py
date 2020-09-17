#!/usr/bin/python3
"""
Contains the top_ten function
"""

import requests


def recurse(subreddit, hot_list=[], after_party=None):
    header = {'User-Agent': 'fake'}
    param = {'after': after_party}
    r = requests.get('http://www.reddit.com/r/{}/hot.json'.format(subreddit),
                     headers=header,
                     params=param)
    if r.status_code == requests.codes.ok or\
            r.json().get('kind', None) is not None:
        x = r.json().get('data').get('children')
        for page in x:
            hot_list.append(page.get('data').get('title'))
        after_paty = r.json().get('data').get('after')
        if after_party is None:
            return hot_list
        recurse(subreddit, hot_list, after_party)
    else:
        return None
