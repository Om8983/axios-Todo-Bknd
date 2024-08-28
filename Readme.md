Mistakes to learn from :::

1. Recoil isn't necessary if props aren't being passed deeper down to the components. In such cases useState() is perfect choice.


2. Lifecylce of a component :: 
                            ==>> Created 
                            ==>> Mounted    :: when component first renders
                            ==>> Updated    :: when state changes 
                            ==>> Unmounted  :: when component is removed 

3. useEffect() ::  useEffect() is ideal to manage the side-effects when a component is mounted/ updated and we need to fetch some backend calls. useEffect() is supposed to be used when certain dependencies chanage or the component is mounted. 
In this project axios was used as an event handler but not as a side-effect. When a fetch call or setTimeout or setInterval is supposed to run onclick or onchange then its not a side-effect, rather its an event handler which runs only when event occurs. 

4. Always use try{} catch{} block while using axios as event handler, not only event handler but whenver you feel an error could occur.

5. The response from backend while using axios can't be verified using "res.ok" as we aren't working with "fetch" but instead we have to use "res.status !== 200".

6. Always define CORS in the backend first and after done with frontend( check an youtube video for "after deploying frontend how to set cors for backend ")