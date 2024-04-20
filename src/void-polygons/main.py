import click

@click.command()
@click.argument('filename')
def main(filename):
    polygons = readPolygonsFromFile(filename)

    layers = {}
    for i, polygon1 in polygons.items():
        area = calcArea(polygon1)
        layer = 0
        for j, polygon2 in polygons.items():
            if i == j:
                continue
            if polygonInPolygon(polygon1, polygon2):
                    layer += 1
        layers[i] = layer

    totalArea = 0
    for p in polygons:
        if layers[p] % 2 == 0:
            totalArea += calcArea(polygons[p])
        else:
            totalArea -= calcArea(polygons[p])
    
    print(totalArea)

def readPolygonsFromFile(filename):
    polygons = []
    with open(filename, 'r') as file:
        for line in file:
            if line.startswith('#') or line.strip() == "":
                continue
            points = line.strip().split(";")
            points = [(float(p.split(",")[0]), float(p.split(",")[1])) for p in points]
            polygons.append(points)
    return {polygons.index(polygon): polygon for polygon in polygons}

def calcArea(polygon):
    area = 0
    for i in range(len(polygon)):
        x1, y1 = polygon[i]
        x2, y2 = polygon[(i+1) % len(polygon)]  
        area += (x1 * y2) - (x2 * y1)
    return abs(area) / 2

def pointInPolygon(point, polygon):
    count = 0
    x, y = point
    for i in range(len(polygon)):
        x1, y1 = polygon[i]
        x2, y2 = polygon[(i+1) % len(polygon)]
        if ((y1 <= y < y2) or (y2 <= y < y1)) and (x < (x2 - x1) * (y - y1) / (y2 - y1) + x1):
            count += 1
    return count % 2 == 1

def polygonInPolygon(polygon1, polygon2):
    for vertex in polygon1:
        if not pointInPolygon(vertex, polygon2):
            return False
    return True


if __name__ == "__main__":
    main()
