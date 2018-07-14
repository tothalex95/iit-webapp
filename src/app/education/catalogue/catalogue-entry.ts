import { PresenceDetail } from "./presence-detail";

export class CatalogueEntry {
    neptunCode: string;
    presence: number;
    max: number;
    presenceDetails: Array<PresenceDetail>;
    hw1: boolean;
    hw2: boolean;
    fulfilled: boolean;
    plusPoint: number;
}