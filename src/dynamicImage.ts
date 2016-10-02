/*
Author  : - Sureshkrishna Gonugunta
Email   : - gsuresh92@gmail.com
Company : - LatentView Analytics
*/

module powerbi.extensibility.visual {
    export class DynamicImage implements IVisual {
        private target: HTMLElement;
        private updateCount: number;

        constructor(options: VisualConstructorOptions) {
            console.log('Visual constructor', options);
            this.target = options.element;
            this.updateCount = 0;
        }

        public update(options: VisualUpdateOptions) {
            console.log('Visual update', options);
            let dataViews = options.dataViews;
            let categorical = dataViews[0].categorical;
            let category = categorical.categories[0];
            //console.log(category.values.length);
            //console.log(category.values);
            if(category.values.length > 1){
                this.target.innerHTML = `<p>This visual currently supports only one image at a time !! The current filter applies for multiple images, Try to apply more filters :) </p>`;
            }else{
                this.target.innerHTML = `<img src="`+category.values[0]+`"></img>`;
            }

        }

        public destroy(): void {
            //TODO: Perform any cleanup tasks here
        }
    }
}