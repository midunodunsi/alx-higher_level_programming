#!/usr/bin/python3

import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import State

if __name__ == "__main__":
engine = create_engine("mysql+mysqldb://{}:{}@localhost/{}"
.format(sys.argv[1], sys.argv[2], sys.srgv[3]),
pool_pre_pin=True)

Session = sessionmaker(bind=engine)

session = Session()

for state in session.query(State).order_by(State.id):
if "a" in state.name:
print("{}: {}".formatstate.id,state.name))
