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
    Skills?: number[];
    Experiences?: number[];
    contacts?: number[];
}

interface Section {
    id: number;
    homepage_content_translations_id: number;
    collection: string;
    item: Item;
}

interface Translation {
    id: number;
    homepage_content_id: number;
    languages_code: string;
    Sections: Section[];
    Logo: string;
}

interface HomepageContent {
    id: number;
    status: string;
    user_created: string;
    date_created: string;
    user_updated: string;
    date_updated: string;
    translations: Translation[];
}
