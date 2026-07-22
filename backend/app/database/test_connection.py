from sqlalchemy import text
from database import engine

try:
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))
    print("✅ PostgreSQL Connected Successfully!")
except Exception as e:
    print("❌ Connection Failed")
    print(e)