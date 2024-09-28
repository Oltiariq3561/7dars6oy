import React from 'react';

function App() {
    const cards = [
        {
            title: 'Avant-Garde Lamp',
            price: 179.99,
            image: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
        },
        {
            title: 'Chic Chair',
            price: 339.99,
            image: 'https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600',
        },
        {
            title: 'Coffee Table',
            price: 179.99,
            image: 'https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            title: 'Comfy Bed',
            price: 129.99,
            image: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600',
        },
        {
            title: 'Contemporary Sofa',
            price: 159.99,
            image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600',
        },
        {
            title: 'Cutting-Edge Bed',
            price: 84.99,
            image: 'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600',
        },
        {
            title: 'Cutting-Edge Bed',
            price: 84.99,
            image: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600',
        },
        {
            title: 'Cutting-Edge Bed',
            price: 22.99,
            image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1600',
        },
        {
            title: 'Cutting Bed',
            price: 90.99,
            image: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1600',
        },
    ];

    return (
        <div className=" flex flex-wrap justify-center gap-6 p-6">
            {cards.map(function (value, index) {
                return (
                    <div key={index} className="max-w-sm w-96 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                        <img className="w-full h-48 object-cover" src={value.image} alt={value.title} />
                        <div className="p-5 text-center">
                            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                            <p className="text-lg font-semibold text-gray-700">${value.price}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default App;