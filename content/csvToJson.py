# To be run from the content directory

import re
import pandas as pd

def hospitalDF(hospitalCsvPath):
    df = pd.read_csv(hospitalCsvPath)
    final = pd.DataFrame()
    final["name"] = df["NAME OF HOSPITALS"]
    final["verified"] = df["VERIFIED?"].apply(lambda s: s.upper().strip('.').strip(' ')) == 'YES'
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


def ambulanceDF(ambulancesCsvPath):
    df = pd.read_csv(ambulancesCsvPath)
    final = pd.DataFrame()
    final["name"] = df["AMBULANCE NAME"]
    final["verified"] = df["VERIFIED?"].apply(lambda s: s.upper().strip('.').strip(' ')) == 'YES'
    final["type"] = df["TYPE"].fillna('Unknown Institution')
    final["facility"] = df["FACILITY"].fillna('Facilities Not Mention')
    final["contact"] = df["CONTACT NUMBER"].fillna('Contact Unknown')
    final["contact_name"] = df["CONTACT NAME"].fillna('Name Unknown')
    final["location"] = df["LOCATION"].fillna('Locality Unknown')
    final["district"] = df["DISTRICT"].fillna('Unknown')
    final["address"] = df["ADDRESS"].fillna('Address Unknown')
    final["service_areas"] = df["SERVICE AREAS"].fillna('Unknown')
    final["notes"] = df['NOTES'].fillna('-')
    return final


def testCenterDF(testCenterCsvPath):
    df = pd.read_csv(testCenterCsvPath)
    final = pd.DataFrame()
    final["name"] = df["NAME OF TEST CENTER"]
    final["verified"] = df["VERIFIED?"].apply(lambda s: s.upper().strip('.').strip(' ')) == 'YES'
    final["type"] = df["TYPE"].fillna('Unknown')
    final["contact"] = df["CONTACT NUMBERS"].fillna('Contact Unknown')
    final["location"] = df["LOCATION"].fillna('Locality Unknown')
    final["address"] = df["ADDRESS"].fillna('Address Unknown')
    final["home_collection"] = df["HOME COLLECTION"].fillna('Unknown')
    final["work_hours"] = df["WORK TIME"].fillna('Unknown')
    final["work_days"] = df["WORK DAYS"].fillna('Unknown')
    final["notes"] = df['NOTES'].fillna('-')
    return final


def oxygenSupplierDF(oxygenSupplierCsvPath):
    df = pd.read_csv(oxygenSupplierCsvPath)
    final = pd.DataFrame()
    final["name"] = df["NAME OF SUPPLIER"]
    final["verified"] = df["VERIFIED?"].apply(lambda s: s.upper().strip('.').strip(' ')) == 'YES'
    final["contact"] = df["CONTACT NUMBERS"].fillna('Contact Unknown')
    final["location"] = df["LOCATION"].fillna('Locality Unknown')
    final["address"] = df["ADDRESS"].fillna('Address Unknown')
    final["delivery_available"] = df["DELIVERY AVAILABLE"].fillna('Unknown')
    final["work_hours"] = df["WORK TIME"].fillna('Unknown')
    final["work_days"] = df["WORK DAYS"].fillna('Unknown')
    final["notes"] = df['NOTES'].fillna('-')
    return final


def foodDF(foodCsvPath):
    df = pd.read_csv(foodCsvPath)
    final = pd.DataFrame()
    final["name"] = df["NAME OF SUPPLIER"]
    final["verified"] = df["VERIFIED?"].apply(lambda s: s.upper().strip('.').strip(' ')) == 'YES'
    final["source"] = df["UNIT TYPE"].fillna('Unknown')
    final["type"] = df["TYPE"].fillna('Unknown')
    final["contact"] = df["CONTACT NUMBERS"].fillna('Contact Unknown')
    final["location"] = df["LOCATION"].fillna('Locality Unknown')
    final["address"] = df["ADDRESS"].fillna('Address Unknown')
    final["delivery_available"] = df["DELIVERY AVAILABLE"].fillna('Unknown')
    final["delivery_areas"] = df["DELIVERY AREAS"].fillna('Unknown')
    final["work_hours"] = df["WORK TIME"].fillna('Unknown')
    final["work_days"] = df["WORK DAYS"].fillna('Unknown')
    final["notes"] = df['NOTES'].fillna('-')
    return final


if __name__ == '__main__':
    hospital = hospitalDF('./csv/hospitals.csv')
    hospital.to_json('./json/hospitals.json', orient='records')

    ambulance = ambulanceDF('./csv/ambulances.csv')
    ambulance.to_json('./json/ambulances.json', orient='records')

    testCenter = testCenterDF('./csv/testCenters.csv')
    testCenter.to_json('./json/testCenters.json', orient='records')

    oxygenSupplier = oxygenSupplierDF('./csv/oxygenSuppliers.csv')
    oxygenSupplier.to_json('./json/oxygenSuppliers.json', orient='records')

    food = foodDF('./csv/food.csv')
    food.to_json('./json/food.json', orient='records')