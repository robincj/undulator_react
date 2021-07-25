const eventYear = 2021;
const now = new Date();

const configuration = {
    ENTRIES_DIR: "entries/",
    EVENT_YEAR: eventYear,
    DATE_AU: eventYear + "-11-07",
    DATE_A100_DAY1: eventYear + "-11-06",
    DATE_A100_DAY2: eventYear + "-11-07",
    DATE_A100_DAY3: eventYear + "-11-08",
    ENTRIES_FILE_AU: `entries_au_${eventYear}.csv`,
    ENTRIES_FILE_A100: `entries_a100_${eventYear}.csv`,
    MAX_ENTRIES_AU: 120,
    MAX_ENTRIES_A100: 34,
    EARLY_ENTRY_DATE: `October 1st, ${eventYear}`,
    PRICE_A100: 180,
    PRICE_A100_EARLY: 150,
    PRICE_AU: 70,
    PRICE_AU_EARLY: 50,
    PRICE_AU_LATE: 80,
    ENTRIES_OPEN_DATE: eventYear + '-01-24',
    MERCHANDISE: { "THIR-Undulator-headband": { "display_name": "THIR Undulator headband", "price": 30, "sizes": null, "colours": null, "description": "<a href=\"http://www.thir.co.nz/thirbands.php\">THIR multi-sport headband</a> with the Undulator logo", "image": "images/logos/Undulator THIR.jpg" }, "T-Shirt": { "display_name": "T-Shirt", "price": 40, "sizes": ["S", "M", "L"], "colours": ["copper"], "description": "Undulator T-shirt", "image": "images/logos/undulator_tshirt_copper.png" } }
};

// close online entries 5pm before day 1
configuration.ONLINE_ENTRIES_CLOSED = (new Date(configuration.ENTRIES_OPEN_DATE).getTime() < now.getTime() && new Date(configuration.DATE_A100_DAY1).getTime() - (1000 * 60 * 60 * 7) < now.getTime());
configuration.ENTRIES_OPEN = (new Date(configuration.ENTRIES_OPEN_DATE).getTime() < now.getTime() && new Date(configuration.DATE_AU).getTime() > now.getTime());

export const config = configuration;
export default config;