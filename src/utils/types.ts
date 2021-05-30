export interface Hospital {
    name: string;
    verified: boolean;
    type: string;
    facility: string;
    contact: string;
    location: string;
    address: string;
    bed_count: string;
    covid_bed_count: string;
    oxygen_bed_count: string;
    nodal_officer: string;
    nodal_officer_contact: string;
    notes: string;
}

export interface Ambulance {
    name: string;
    verified: boolean;
    type: string;
    facility: string;
    contact: string;
    contact_name: string;
    location: string;
    district: string;
    address: string;
    service_areas: string;
    notes: string;
}

export interface TestCenter {
    name: string;
    verified: boolean;
    type: string;
    contact: string;
    location: string;
    address: string;
    home_collection: string;
    work_hours: string;
    work_days: string;
    notes: string;
}

export interface OxygenSupplier {
    name: string;
    verified: boolean;
    contact: string;
    location: string;
    address: string;
    delivery_available: string;
    work_hours: string;
    work_days: string;
    notes: string;
}

export interface FoodSupplier {
    name: string;
    verified: boolean;
    source: string;
    type: string;
    contact: string;
    location: string;
    address: string;
    delivery_available: string;
    delivery_areas: string;
    work_hours: string;
    work_days: string;
    notes: string;
}

export interface GrocerySupplier {
    name: string;
    verified: boolean;
    contact: string;
    location: string;
    delivery_area: string;
    delivery_fee: string;
    work_hours: string;
    work_days: string;
    notes: string;
}

export interface Counsellor {
    name: string;
    verified: boolean;
    contact: string;
    location: string;
    work_hours: string;
    charges: string;
    whatsapp: string;
    notes: string;
}
