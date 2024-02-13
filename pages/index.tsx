import {useEffect, useState} from 'react'
import Card, {CardProps} from '../components/Card'
import Banner from "../components/Banner";
import {LiveDataResponse} from "./api/live";
import {StaticContentElement, StaticContentResponse} from "./api/content";

export default function Home() {
    const [cards, setCards] = useState<StaticContentElement[]>([])
    const [alert, setAlert] = useState<string | null>(null)
    const [versionNumber, setVersionNumber] = useState(1);

    const fetchLiveData = function () {
        fetch('/api/live')
            .then(response => {
                return response.json()
            })
            .then((data: LiveDataResponse) => setAlert(data.newsAlert))
            .catch(() => setAlert('Ups, we are offline...'))
    }

    // fetch live data periodically
    useEffect(() => {
        const interval = setInterval(() => {
            fetchLiveData()
        }, 5000)
        fetchLiveData()

        return () => clearInterval(interval);
    }, [])

    function handleClick() {
        fetch(`/api/content?version=${versionNumber}`)
            .then(response => {
                return response.json()
            })
            .then((response: StaticContentResponse) => setCards(response.elements))
            .catch(() => setCards([]))
    }

    return (
        <>
            <h1 className="text-3xl md:text-5xl p-10 mb-4 font-extrabold" id="home">Live data</h1>
            <Banner info={alert}/>

            <h1 className="text-3xl md:text-5xl p-10 mb-4 font-extrabold" id="home">Static data</h1>
            <form className="p-10 w-full max-w-sm">
                <div className="flex items-center border-b border-indigo-400 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        onChange={e => setVersionNumber(+e.target.value)}
                        type="number" value={versionNumber}/>
                    <button
                        className="flex-shrink-0 bg-indigo-400 hover:bg-indigo-700 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
                        onClick={() => handleClick()}
                        type="button">
                        Load data
                    </button>
                </div>
            </form>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {cards.map((card) => {
                    return (
                        <div key={card.key}>
                            <Card
                                title={card.title}
                                picture={card.picture}
                                description={card.description}
                                tags={card.tags}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
