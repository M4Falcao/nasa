from fastapi import FastAPI

app = FastAPI()

@app.get("/plot-heatmap")
def plot_heatmap(name: str):

    from starlette.responses import StreamingResponse
    import matplotlib.pyplot as plt
    import pandas as pd
    import seaborn as sb
    import random

    cities = ["recife","sao paulo", "rio"]
    data = {"id":[], "o2_emissions":[],"water_pollution":[],"artic_melting":[],"wild_fire":[],"city":[]}
    data["id"] = [x for x in range(100)]
    data["o2_emissions"] = [random.uniform(1,100) for x in range(100)]
    data["water_pollution"] = [random.uniform(1,100) for x in range(100)]
    data["artic_melting"] = [(random.uniform(0,0.4))*x for x in data["o2_emissions"]]
    data["wild_fire"] = [(random.uniform(0.1,0.4))*x for x in data["o2_emissions"]]
    data["city"] = [random.choice(cities) for x in range(100)]
    df = pd.DataFrame(data).set_index('id')

    

    if name == "heatmap":
        sb.heatmap(df.corr(), annot=True)
        plt.savefig('heatmap.png')
        file = open('heatmap.png', mode="rb")
        return StreamingResponse(file, media_type="image/png")

    if name == "pairplot":
        sb.pairplot(df, hue="city")
        plt.savefig('pairplot.png')
        file = open('pairplot.png', mode="rb")
        return StreamingResponse(file, media_type="image/png")