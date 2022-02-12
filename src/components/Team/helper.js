function getSumOfProperty(team, property) {
    return team
    .map((hero) => Number(hero.powerstats[property]) || 0)
    .reduce((a, b) => a + b, 0);
}

const combat = getSumOfProperty(team, "combat");
const durability = getSumOfProperty(team, "durability");
const intelligence = getSumOfProperty(team, "intelligence");
const power = getSumOfProperty(team, "power");
const speed = getSumOfProperty(team, "speed");
const strength = getSumOfProperty(team, "strength");
  
  const powerStats = [
    {
      name: "combat",
      value: combat
    },
    {
      name: "durability",
      value: durability
    },
    {
      name: "intelligence",
      value: intelligence
    },
    {
      name: "power",
      value: power
    },
    {
      name: "speed",
      value: speed
    },
    {
      name: "strength",
      value: strength
    }
    ].sort((a, b) => b - a);
    
    console.log(powerStats);

    export default function helper() {
      return [];
    }


{powerStats
.sort((a, b) => b.value - a.value)
.map((stat) => (
  <div
    key={stat.name}
    className="card col-md col-6 m-1"
    style={{ width: "18rem" }}
  >
    <div className="card-body h5">
      <p className="card-text text-capitalize">{stat.name}</p>
      <p className="card-text text-secondary-custom">
        {stat.value}
      </p>
    </div>
  </div>
))}

    // codigo viejo
    // <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
    //         <div className="card-body h5">
    //           <p className="card-text">Combat</p>
    //           <p className="card-text text-secondary-custom">{combat}</p>
    //         </div>
    //       </div>
    //       <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
    //         <div className="card-body h5">
    //           <p className="card-text">Durability</p>
    //           <p className="card-text text-secondary-custom">{durability}</p>
    //         </div>
    //       </div>
    //       <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
    //         <div className="card-body h5">
    //           <p className="card-text">Intelligence</p>
    //           <p className="card-text text-secondary-custom">{intelligence}</p>
    //         </div>
    //       </div>
    //       <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
    //         <div className="card-body h5">
    //           <p className="card-text">Power</p>
    //           <p className="card-text text-secondary-custom">{power}</p>
    //         </div>
    //       </div>
    //       <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
    //         <div className="card-body h5">
    //           <p className="card-text">Speed</p>
    //           <p className="card-text text-secondary-custom">{speed}</p>
    //         </div>
    //       </div>
    //       <div className="card col-md col-6 m-1" style={{ width: "18rem" }}>
    //         <div className="card-body h5">
    //           <p className="card-text">Strength</p>
    //           <p className="card-text text-secondary-custom">{strength}</p>
    //         </div>
    //       </div>
    //       <div className="card-footer row bg-white">
    //         <div className="col">
    //           Average Weight: {weight ? round(average(weight), 2) : "0"} kg.
    //         </div>
    //         <div className="col">
    //           Average Height: {height ? round(average(height), 2) : "0"} cm.
    //         </div>
    //       </div>