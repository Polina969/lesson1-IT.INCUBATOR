"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resolutions = void 0;
exports.createItemClient = createItemClient;
var Resolutions;
(function (Resolutions) {
    Resolutions["P144"] = "P144";
    Resolutions["P240"] = "P240";
    Resolutions["P360"] = "P360";
    Resolutions["P480"] = "P480";
    Resolutions["P720"] = "P720";
    Resolutions["P1080"] = "P1080";
    Resolutions["P1440"] = "P1440";
    Resolutions["P2160"] = "P2160";
})(Resolutions || (exports.Resolutions = Resolutions = {}));
function createItemClient(data) {
    const createdAt = new Date();
    const publicationDate = new Date(createdAt);
    publicationDate.setDate(createdAt.getDate() + 1);
    return Object.assign(Object.assign({}, data), { createdAt: createdAt.toISOString(), publicationDate: publicationDate.toISOString() });
}
