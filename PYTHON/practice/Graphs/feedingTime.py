from collections import defaultdict
import random

# actually, an inverse "islands" problem
# instead of finding all connected items
# find all items with no connections
# need to have an inverse link
# instead of a "common animal" link
# build a goofy "dark edge" graph

# start with all classes connected to all other classes
# then disconnect them when an edge between them is found!
def feedingTime(classes):
    class_graph = defaultdict(set)
    animals = defaultdict(set)
    neg_graph = defaultdict(set)
    c_size = len(classes)

    # fully connected graph
    for i in range(c_size):
        for j in range(c_size):
            if i != j:
                class_graph[i].add(j)

    # animals graph to classes - constructed here
    for i, c_arr in enumerate(classes):
        for animal in c_arr:
            animals[animal].add(i)

    # now remove edges based on connections
    # need to remove third-party edges as well...
    for i, c_arr in enumerate(classes):
        for animal in c_arr:
            for c_val in animals[animal]:
                class_graph[i].discard(c_val)
                neg_graph[c_val].update(set(animals[animal]))
                neg_graph[c_val].discard(c_val)

    # now find islands as normal!
    # worth a shot
    # need a break condition if the conflicting animals are related when can be added to current
    # then remove from graph!
    check = []

    # check.append(graph_search([9, 5, 1, 4, 6, 2, 7, 3, 8, 0], class_graph.copy(), neg_graph.copy()))

    for _ in range(200):
        vals = list(range(c_size))
        random.shuffle(vals)
        curr_graph = class_graph.copy()
        for key in curr_graph:
            l = list(curr_graph[key])
            random.shuffle(l)
            curr_graph[key] = set(l)
        a = graph_search(vals, curr_graph, neg_graph.copy())
        check.append(a)

    print(check)
    print(animals)

    islands = min(check)

    if islands > 5:
        return -1

    return islands


def graph_search(vals, class_graph, neg_graph):
    seen = set()
    islands = []
    for i in vals:
        if i not in seen:
            queue = [i]
            seen.add(i)
            route = {i}
            found_val = False

            while queue:
                curr = queue.pop(0)
                route.add(curr)
                seen.add(curr)
                for item in class_graph[curr]:
                    # halts the BFS if any connections to another class that has the same animals
                    # should actually only add item if not in conflict with anything in route
                    # not break altogether
                    test = [item in neg_graph[a] for a in route]
                    if not any(test) and item not in seen:
                        seen.add(item)
                        queue.append(item)
                        route.add(item)
            islands.append(route)
            seen = set()
            for island in islands:
                for a in island:
                    seen.add(a)
    print(islands)
    return len(islands)

    # below is close, but not quite there!
    # classes_assigned = {}
    # day_schedule = []
    # day_animals = defaultdict(set)
    # #make a dictionary of the animals to the class index values
    # animals = defaultdict(list)

    # for i, item in enumerate(classes):
    #     for animal in item:
    #         animals[animal].append(i)

    # #sum and sort animals by number of classes that want to see them
    # animal_counts = []
    # for key in animals.keys():
    #     count = len(animals[key])
    #     animal_counts.append((key, count))

    # animal_counts.sort(key=sort_last)
    # animal_counts.reverse()

    # #case where no schedule in 5 days is possible
    # # if(animal_counts[0][1]>5):
    # #     return -1

    # #add initial conflicting classes for most requested animal
    # start_animal = animal_counts[0][0]
    # for class_val in animals[start_animal]:
    #     day_schedule.append([class_val])
    #     classes_assigned[class_val] = len(day_schedule)-1
    #     day_animals[len(day_schedule)-1].update(set(classes[class_val]))

    # animal_counts.pop(0)

    # animal_counts.reverse()

    # #now assign classes where there are no conflicts
    # for animal, count in animal_counts:
    #     conflict_classes = animals[animal]
    #     for item in conflict_classes:
    #         if(item in classes_assigned):
    #             continue
    #         for i, items in enumerate(day_schedule):
    #             curr_class_animals = set(classes[item])
    #             if(len(day_animals[i].intersection(curr_class_animals)) == 0):
    #                 day_schedule[i].append(item)
    #                 day_animals[i].update(curr_class_animals)
    #                 classes_assigned[item] = i
    #                 break
    #         else:
    #             day_schedule.append([item])
    #             day_animals[len(day_schedule)-1].update(set(classes[item]))
    #             classes_assigned[item] = len(day_schedule)-1

    # print(day_schedule)
    # print(day_animals)
    # print(animals)

    # if len(day_schedule) > 5:
    #     return -1

    # return len(day_schedule)


def sort_last(tup):
    return tup[1]
