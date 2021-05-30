# To be run from the content directory

import re
import pandas as pd

def hospitalDF(hospitalCsvPath):
    df = pd.read_csv(hospitalCsvPath)
    df.head()
    final = pd.DataFrame()
    final["name"] = df["NAME OF HOSPITALS"]
    final["verified"] = df["VERIFIED?"] != 'NO'
    final["type"] = df["TYPE"].fillna('Unknown Institution')
    final["facility"] = df["FACILITY"].fillna('Facilities Not Mention')
    final["contact"] = df["CONTACT NOS"].fillna('Contact Unknown')
    final["location"] = df["LOCATION"].fillna('Locality Unknown')
    final["address"] = df["ADDRESS"].fillna('Address Unknown')
    final["bed_count"] = df['NO of BEDS'].fillna('0')
    final["covid_bed_count"] = df['COVID BEDS'].fillna('0')
    final["oxygen_bed_count"] = df['OXYGEN BEDS'].fillna('0')
    final["nodal_officer"] = df['NODAL OFFICER'].fillna('Unknown')
    final["nodal_officer_contact"] = df['CONTACT NUMBER'].fillna('Contact Unknown')
    final["notes"] = df['NOTES'].fillna('-')
    return final


if __name__ == '__main__':
    hospital = hospitalDF('hospitals.csv')
    hospital.to_json('./hospitals.json', orient='records')

