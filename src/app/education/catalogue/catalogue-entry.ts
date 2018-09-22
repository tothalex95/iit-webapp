import { PresenceDetail } from "./presence-detail";

export class CatalogueEntry {
    neptunCode: string;
    presence: number;
    max: number;
    presenceDetails: Array<PresenceDetail>;
    hw1: number;
    hw2: number;
    fulfilled: boolean;
    plusPoint: number;
}
