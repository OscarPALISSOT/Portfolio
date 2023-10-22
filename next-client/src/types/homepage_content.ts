import Skills from "./skills";

interface Item {
    id: number;
    status: string;
    sort: number | null;
    user_created: string;
    date_created: string;
    user_updated: string | null;
    date_updated: string | null;
    Headline: string;
    Link: string;
    Content?: string;
    Image?: string;
    Skills?: Skills[];
    Experiences?: number[];
    contacts?: number[];
}

interface Section {
    id: number;
    homepage_content_translations_id: number;
    collection: string;
    item: Item;
}

interface HomepageContent {
    id: number;
    status: string;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    Sections: Section[];
    Logo: string;
}


export default HomepageContent;