# gives True if two duplicate numbers in the nums array are within k distance
# (inclusive) of one another, measuring by absolute difference in index

# did relatively well on this one, made a greater-than/less-than flip error on
# the conditional for the true case and needed to rewrite my code to remove
# keys from the dictionary without editing it while looping over it, but
# otherwise went well!

# problem considered medium difficulty, from Palantir


def containsCloseNums(nums, k):
    num_dict = {}
    # setup keys for each number seen, then list their indices
    for i, item in enumerate(nums):
        if item in num_dict:
            num_dict[item].append(i)
        else:
            num_dict[item] = [i]

    # remove all nums that are not repeated
    # first make a set of keys to remove to prevent editing the dictionary size while iterating over it
    removals = {key for key, value in num_dict.items() if len(value) < 2}
    # now remove each key from the num_dict that has fewer than two values
    for key in removals:
        num_dict.pop(key)

    # now check remaining numbers to see if they fall within the desired range
    for key, value_ in num_dict.items():
        last_ind = num_dict[key][0]
        for next_ind in value_[1:]:
            if next_ind - last_ind <= k:
                return True
            last_ind = next_ind

    return False
