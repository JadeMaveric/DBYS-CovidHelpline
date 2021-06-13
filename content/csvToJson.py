# To be run from the content directory

import re
import pandas as pd

def hospitalDF(csvPath):
    try:
        print(f"Processing {csvPath}")
        df = pd.read_csv(csvPath)
        # Only for hospitals, remove first line - it's a PSA
        df.columns = df.iloc[0]
        df.drop(0, inplace=True)
        header_guard = (df.columns == ["NAME OF HOSPITALS","TYPE","FACILITY","CONTACT NOS","LOCATION","ADDRESS","NO of BEDS","COVID BEDS","OXYGEN BEDS","NODAL OFFICER","CONTACT NUMBER","NOTES","VERIFIED?"]).all()
        assert header_guard
    except FileNotFoundError:
        print("ERROR: File not found")
        exit()
    except ValueError:
        print("ERROR: Number of attributes has changed")
        exit()
    except AssertionError:
        print("ERROR: Some headers have changed")
        exit()
    
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


def ambulanceDF(csvPath):
    try:
        print(f"Processing {csvPath}")
        df = pd.read_csv(csvPath)
        header_guard = (df.columns == ["AMBULANCE NAME","TYPE","FACILITY","CONTACT NUMBER","CONTACT NAME","LOCATION","ADDRESS","DISTRICT","SERVICE AREAS","NOTES","VERIFIED?"]).all()
        assert header_guard
    except FileNotFoundError:
        print("ERROR: File not found")
        exit()
    except ValueError:
        print("ERROR: Number of attributes has changed")
        exit()
    except AssertionError:
        print("ERROR: Some headers have changed")
        exit()

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


def testCenterDF(csvPath):
    try:
        print(f"Processing {csvPath}")
        df = pd.read_csv(csvPath)
        header_guard = (df.columns == ["NAME OF TEST CENTER","TYPE","CONTACT NUMBERS","LOCATION","ADDRESS","HOME COLLECTION","WORK TIME","WORK DAYS","NOTES","VERIFIED?"]).all()
        assert header_guard
    except FileNotFoundError:
        print("ERROR: File not found")
        exit()
    except ValueError:
        print("ERROR: Number of attributes has changed")
        exit()
    except AssertionError:
        print("ERROR: Some headers have changed")
        exit()

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


def oxygenSupplierDF(csvPath):
    try:
        print(f"Processing {csvPath}")
        df = pd.read_csv(csvPath)
        header_guard = (df.columns == ["NAME OF SUPPLIER","CONTACT NUMBERS","LOCATION","ADDRESS","DELIVERY AVAILABLE","WORK TIME","WORK DAYS","NOTES","VERIFIED?"]).all()
        assert header_guard
    except FileNotFoundError:
        print("ERROR: File not found")
        exit()
    except ValueError:
        print("ERROR: Number of attributes has changed")
        exit()
    except AssertionError:
        print("ERROR: Some headers have changed")
        exit()

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


def foodDF(csvPath):
    try:
        print(f"Processing {csvPath}")
        df = pd.read_csv(csvPath)
        header_guard = (df.columns == ["NAME OF SUPPLIER","UNIT TYPE","CONTACT NUMBERS","LOCATION","TYPE","ADDRESS","DELIVERY AVAILABLE","DELIVERY AREAS","WORK TIME","WORK DAYS","NOTES","VERIFIED?"]).all()
        assert header_guard
    except FileNotFoundError:
        print("ERROR: File not found")
        exit()
    except ValueError:
        print("ERROR: Number of attributes has changed")
        exit()
    except AssertionError:
        print("ERROR: Some headers have changed")
        exit()

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


def groceryDF(csvPath):
    try:
        print(f"Processing {csvPath}")
        df = pd.read_csv(csvPath)
        header_guard = (df.columns == ["SUPPLIER","CONTACT","LOCATION","DELIVERY AREA","TIMINGS","DAYS","DELIVERY FEE","NOTES","VERIFIED?"]).all()
        assert header_guard
    except FileNotFoundError:
        print("ERROR: File not found")
        exit()
    except ValueError:
        print("ERROR: Number of attributes has changed")
        exit()
    except AssertionError:
        print("ERROR: Some headers have changed")
        exit()

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


def counsellorDF(csvPath):
    try:
        print(f"Processing {csvPath}")
        df = pd.read_csv(csvPath)
        header_guard = (df.columns == ["COUNSELLOR NAME","CONTACT NUMBERS","ORGANISATION/ LOCATION/ TELE-CONSULTATION","DAYS AND TIME AVAILABLE","WHATSAPP AVAILABLE?","CHARGES APPLICABLE","NOTES","VERIFIED?"]).all()
        assert header_guard
    except FileNotFoundError:
        print("ERROR: File not found")
        exit()
    except ValueError:
        print("ERROR: Number of attributes has changed")
        exit()
    except AssertionError:
        print("ERROR: Some headers have changed")
        exit()

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


def pharmacyDF(csvPath):
    try:
        print(f"Processing {csvPath}")
        df = pd.read_csv(csvPath)
        header_guard = (df.columns == ["Name","Location (Main Area + District)","Address","Days ","Timings","Contact","Home Delivery (YES/NO) ","Delivery Areas","Home Delivery Charges","Any WhatsApp number (to message the list of meds for home delivery)","Oximeter available (Yes/No) + Price ","Remarks (availability of medicines/vitamins - Doxycycline, dolo, Vit C, Vit D, Zinc) + (protective equipment - N95 masks, surgical masks, steam inhaler) + general remarks","Verified"]).all()
        assert header_guard
    except FileNotFoundError:
        print("ERROR: File not found")
        exit()
    except ValueError:
        print("ERROR: Number of attributes has changed")
        exit()
    except AssertionError:
        print("ERROR: Some headers have changed")
        exit()

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


def sheet_url(gid):
    gsheet_id = '2PACX-1vQqT2DSg5Cvfoyiu2EuTZaCpZjs22enZ0sdHef5dxk046vZKnhdXfKXhlVLZfNT31TOYMSY_7vvkHYN'
    url = f'https://docs.google.com/spreadsheets/d/e/{gsheet_id}/pub?output=csv&gid={gid}'
    return url

if __name__ == '__main__':
    hospital = hospitalDF(sheet_url(1484367194))
    hospital.to_json('./content/json/hospitals.json', orient='records')

    ambulance = ambulanceDF(sheet_url(2010422691))
    ambulance.to_json('./content/json/ambulances.json', orient='records')

    testCenter = testCenterDF(sheet_url(833979680))
    testCenter.to_json('./content/json/testCenters.json', orient='records')

    oxygenSupplier = oxygenSupplierDF(sheet_url(0))
    oxygenSupplier.to_json('./content/json/oxygenSuppliers.json', orient='records')

    food = foodDF(sheet_url(1235569691))
    food.to_json('./content/json/food.json', orient='records')

    grocery = groceryDF(sheet_url(1656957025))
    grocery.to_json('./content/json/grocery.json', orient='records')

    counsellor = counsellorDF(sheet_url(122552600))
    counsellor.to_json('./content/json/counsellors.json', orient='records')

    pharmacy = pharmacyDF(sheet_url(302381169))
    pharmacy.to_json('./content/json/pharmacy.json', orient='records')
