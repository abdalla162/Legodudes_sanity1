export const categories = {
        title: "categories", 
        name: "categories",
        type: "document",
        fields: [
            
            {
                title: "kategoritittel",
                name: "categorytitle",
                type: "string" 

            },
            {
                title: "kategorilink",
                name: "categoryurl",
                type: "slug" ,
                options: {
                    source: "categorytitle",
                    slugify: input => input.toLowerCase().replace(/\s+/g, '_')
                } 

            }

        ]
    }
