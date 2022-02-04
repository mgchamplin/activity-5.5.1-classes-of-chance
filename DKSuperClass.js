class ScannerSuperClass {
    constructor (model, height, width, color, dpi, outputFormat) {
        this.model = model;
        this.height = height;
        this.width = width;
        this.color = color;
        this.dpi = dpi;
        this.output_format = outputFormat;
    }

    get model() {return this.model}
    get height() {return this.height;}
    get width() {return this.width;}
    get color() {return this.color;}
    get dpi() {return this.dpi;}
    get output_format() {return this.output_format;}

    scanDocuments(model, outputformat, dpi, width, height, color) {}
    deleteScannedDocument(scannedImages[]) {}
    getScannedDocuments(imageLocation){}
}