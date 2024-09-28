import React , {useEffect,useState} from 'react';

function App() {
    const [user,  setUser] = useState([]);
    const [loading , setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://strapi-store-server.onrender.com/api/products')
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then(data => {
                setUser(data.data)
                console.log(data.data);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(function() {
                setLoading(false)
            })
    }, []);

    return (
        <div className=" flex flex-wrap justify-center gap-6 p-6">

            {
            loading && <p>loading...</p>
            }
            {user.map(function (value, index) {
                return (
                    <div key={index} className="max-w-sm w-96 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                        <img className="w-full h-48 object-cover" src={value.attributes.image} alt={value.title} />
                        <div className="p-5 text-center">
                            <h3 className="text-xl font-bold mb-2">{value.attributes.title}</h3>
                            <p className="text-lg font-semibold text-gray-700">${value.attributes.price}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default App;