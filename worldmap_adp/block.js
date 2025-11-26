const { registerBlockType } = wp.blocks;
const { InspectorControls, useBlockProps } = wp.blockEditor;
const { PanelBody, TextareaControl, TextControl, Button, ToggleControl } = wp.components;
const { useState } = wp.element;

registerBlockType('aviondepapier/world-map-block', {
    title: 'Carte du monde - Avion de papier',
    icon: 'location-alt',
    category: 'layout',
    attributes: {
        countriesName: { type: 'string', default: '' },
        links: { type: 'object', default: {} }, // Map of country codes to links
        showCountryList: { type: 'boolean', default: true },
    },
    edit: ({ attributes, setAttributes }) => {
        const { countries, links, showCountryList } = attributes;
        const [currentCountry, setCurrentCountry] = useState('');
        const [currentCountryName, setCurrentCountryName] = useState('');
        const [currentLink, setCurrentLink] = useState('');

        const updateCountries = (value) => setAttributes({ countries: value });

        const updateLink = () => {
            if (currentCountry && currentLink) {
                setAttributes({
                    links: { ...links, [currentCountry]: { name: currentCountryName, link: currentLink }  },
                });
                setCurrentCountryName('');
                setCurrentCountry('');
                setCurrentLink('');
            }
        };

        const removeLink = (countryCode) => {
            const updatedLinks = { ...links };
            delete updatedLinks[countryCode];
            setAttributes({ links: updatedLinks });
        };

        return React.createElement(
            'div',
            useBlockProps(),
            React.createElement(
                InspectorControls,
                null,
                React.createElement(
                    PanelBody,
                    { title: 'Paramètres des pays' },
                    React.createElement(TextControl, {
                        label: 'Nom du pays',
                        value: currentCountryName,
                        onChange: (value) => setCurrentCountryName(value),
                        placeholder: 'Ex: France',
                    }),
                    React.createElement(TextControl, {
                        label: 'Code pays',
                        value: currentCountry,
                        onChange: (value) => setCurrentCountry(value),
                        placeholder: 'Ex: FR,US',
                    }),
                    React.createElement(TextControl, {
                        label: 'Lien',
                        value: currentLink,
                        onChange: (value) => setCurrentLink(value),
                        placeholder: 'e.g., https://example.com',
                    }),
                    React.createElement(
                        Button,
                        {
                            onClick: updateLink,
                            isPrimary: true,
                            style: { marginTop: '10px' },
                        },
                        'Ajouter un lien'
                    ),
                    React.createElement(ToggleControl, {
                        label: "Afficher la liste des pays",
                        checked: showCountryList,
                        onChange: (value) => setAttributes({ showCountryList: value })
                    }),
                    React.createElement(
                        'div',
                        { style: { marginTop: '20px' } },
                        Object.entries(links).map(([country, link]) =>
                            React.createElement(
                                'div',
                                { key: country, style: { marginBottom: '10px' } },
                                React.createElement('strong', null, `${country}: `),
                                React.createElement('span', null, link['link']),
                                React.createElement(
                                    Button,
                                    {
                                        isDestructive: true,
                                        onClick: () => removeLink(country),
                                        style: { marginLeft: '10px' },
                                    },
                                    'Supprimer'
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'p',
                null,
                "Aperçu de la carte [Ne s'affiche pas dans l'éditeur]"
            )
        );
    },
    save: () => {
        return null; // Server-side rendering
    },
});