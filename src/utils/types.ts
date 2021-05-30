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
    verified: string;
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
