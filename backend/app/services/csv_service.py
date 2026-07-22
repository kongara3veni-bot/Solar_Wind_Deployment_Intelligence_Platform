import pandas as pd


def read_csv(file_path: str):
    df = pd.read_csv(file_path)

    return {
        "rows": len(df),
        "columns": len(df.columns),
        "column_names": list(df.columns)
    }