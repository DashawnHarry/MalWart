import os
import sys

base = '\033[0m'
error = '\033[37m\033[41m'


def windowCommands():
    try:
        os.system('psql -U postgres -f server/database/database.sql malwartdb')
        os.system('psql -U postgres -f server/database/migration.sql malwartdb')
        os.system('psql -U postgres -f server/database/seed.sql malwartdb')
    except Exception:
        print(
            f'{error}Error\n' +
            f'{base}{Exception}')
        sys.exit()


def macCommands():
    try:
        os.system('psql -f server/database/database.sql MalWartDB')
        os.system('psql -f server/database/migration.sql MalWartDB')
        os.system('psql -f server/database/seed.sql MalWartDB')
    except Exception:
        print(
            f'{error}Error\n' +
            f'{base}{Exception}')
        sys.exit()


if sys.platform == 'win32':
    windowCommands()
else:
    macCommands()
