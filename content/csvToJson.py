# To be run from the content directory

import re
import pandas as pd

#TODO: Add index guard for df
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


def groceryDF(groceryCsvPath):
    df = pd.read_csv(groceryCsvPath)
    final = pd.DataFrame()
    final["name"] = df["SUPPLIER"]
    final["verified"] = df["VERIFIED?"].apply(lambda s: s.upper().strip('.').strip(' ')) == 'YES'
    final["contact"] = df["CONTACT"].fillna('Contact Unknown')
    final["location"] = df["LOCATION"].fillna('Locality Unknown')
    final["delivery_area"] = df["DELIVERY AREA"].fillna('Unknown')
    final["delivery_fee"] = df['DELIVERY FEE'].fillna('-')
    final["work_hours"] = df["TIMINGS"].fillna('Unknown')
    final["work_days"] = df["DAYS"].fillna('Unknown')
    final["notes"] = df['NOTES'].fillna('-')
    return final


def counsellorDF(counsellorCsvPath):
    df = pd.read_csv(counsellorCsvPath)
    final = pd.DataFrame()
    final["name"] = df["COUNSELLOR NAME"]
    final["verified"] = df["VERIFIED?"].apply(lambda s: s.upper().strip('.').strip(' ')) == 'YES'
    final["contact"] = df["CONTACT NUMBERS"].fillna('Contact Unknown')
    final["location"] = df["ORGANISATION/ LOCATION/ TELE-CONSULTATION"].fillna('Locality Unknown')
    final["work_hours"] = df["DAYS AND TIME AVAILABLE"].fillna('Unknown')
    final["charges"] = df["CHARGES APPLICABLE"].fillna('Unknown')
    final["whatsapp"] = df["WHATSAPP AVAILABLE?"].fillna('NO').apply(lambda s: s.upper().strip())
    final["notes"] = df['NOTES'].fillna('-')
    return final


def pharmacyDF(pharmacyCsvPath):
    df = pd.read_csv(pharmacyCsvPath)
    final = pd.DataFrame()
    final["name"] = df["Name"]
    final["verified"] = df["Verified"].apply(lambda s: s.upper().strip('.').strip(' ')) == 'YES'
    final["contact"] = df["Contact"].fillna('Contact Unknown').apply(lambda s: s.strip())
    final["whatsapp"] = df["Any WhatsApp number (to message the list of meds for home delivery)"].fillna('Contact Unknown')
    final["location"] = df["Location (Main Area + District)"].fillna('Locality Unknown')
    final["address"] = df["Address"].fillna('Unknown')
    final["home_delivery"] = df['Home Delivery (YES/NO) '].fillna('-')
    final["delivery_area"] = df['Delivery Areas'].fillna('-')
    final["delivery_fee"] = df['Home Delivery Charges'].fillna('-')
    final["work_hours"] = df["Timings"].fillna('Unknown')
    final["work_days"] = df["Days "].fillna('Unknown')
    final["oximeter_available"] = df["Oximeter available (Yes/No) + Price "].fillna('Unknown')
    final["Remarks (availability of medicines/vitamins - Doxycycline, dolo, Vit C, Vit D, Zinc) + (protective equipment - N95 masks, surgical masks, steam inhaler) + general remarks"] = df["Remarks (availability of medicines/vitamins - Doxycycline, dolo, Vit C, Vit D, Zinc) + (protective equipment - N95 masks, surgical masks, steam inhaler) + general remarks"].fillna('-')
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

    grocery = groceryDF('./csv/grocery.csv')
    grocery.to_json('./json/grocery.json', orient='records')

    counsellor = counsellorDF('./csv/counsellors.csv')
    counsellor.to_json('./json/counsellors.json', orient='records')

    pharmacy = pharmacyDF('./csv/pharmacy.csv')
    pharmacy.to_json('./json/pharmacy.json', orient='records')