const App = () => {
    const nr = 4;
    return (
        <div>
            {nr % 2 !== 0 && <p>Broj {nr} je neparan</p>}
            {!(nr % 2) && <p>Broj {nr} je paran</p>}
        </div>
    );
};

export default App;
