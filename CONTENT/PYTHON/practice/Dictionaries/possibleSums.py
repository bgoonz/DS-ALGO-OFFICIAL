import itertools

# Given an array of coins and an array of quantities for each coin with the
# same index, determine how many distinct sums can be made from non-zero
# sets of the coins

# Note: This problem took a little more working-through, with a failed brute-
# force attempt that consisted of finding every combination of coins and
# adding them, which failed when I needed to consider >50k coins
# the overall number of coins was guaranteed to be less than about 1 million,
# so the solution appeared to be a form of divide-and-conquer where each
# possible sum for each coin was put into a set at that coin's index in the
# original coins array, and then the sums were repeatedly combined into an
# aggregate set until every coin possible coin value (given by the coins
# array) had been added into the set of sums

# problem considered "hard," asked by Google


def possibleSums(coins, quantity):
    # sum_map = set()
    # start with brute force
    # total_arr = [coins[i] for i, q in enumerate(quantity) for l in range(q)]

    # for i in range(1, len(total_arr)+1):
    #     combos = itertools.combinations(total_arr, i)
    #     print(combos)
    #     for combo in combos:
    #         sum_map.add(sum(combo))

    # return len(sum_map)

    # faster?
    comb_indices = [i for i in range(len(coins))]
    possible_sums = []
    for i, c in enumerate(coins):
        this_set = {c * q for q in range(1, 1 + quantity[i])}
        possible_sums.append(this_set)
    # print(possible_sums)

    while len(possible_sums) > 1:
        possible_sums[0] = combine_sets(possible_sums[0], possible_sums[1])
        possible_sums.pop(1)

    return len(possible_sums[0])


def combine_sets(set1, set2):
    together_set = set()
    for item1 in set1:
        for item2 in set2:
            together_set.add(item1 + item2)
        together_set.add(item1)

    for item2 in set2:
        together_set.add(item2)
    return together_set
