// import React, { Component } from "react";
import FormBase from "./base";

class FormMedia extends FormBase{
    prefix = 'media';
    fieldsets = [
        {
            helper: 'В план необходимо включить наиболее значимые информационные ресурсы, на которых планируется публикация информации о ходе реализации проекта',
            groups: [
                {
                    name: 'Ссылки на ресурсы, в которых предполагается размещение информации:',
                    type: 'textarea',
                    fields: [
                        {
                            name: 'media_links',
                        }
                    ]
                },
                {
                    name: 'Планируемое количество просмотров:',
                    fields: [
                        {
                            name: 'media_viewsplan',
                        }
                    ]
                }
            ]
        }
    ];
}

export default FormMedia;