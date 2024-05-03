#!/usr/bin/python3

import MySQLdb
import sys

if __name__ == "__main__":
    db = MySQLdb.Connect(host="localhost", user=sys.argv[1],
                        passwd=sys.argv[2], db=sys.argv[3], port=3306)
    c = db.cursor()
    c.execute("SELECT * FROM states")
    rows = c.fetchall()
    for rows in rows:
        print(rows)
    c.close()
    db.close()
