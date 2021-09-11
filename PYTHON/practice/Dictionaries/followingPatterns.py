# need strings[i] = strings[j] for all patterns[i] = patterns[j] to be true -
# give false if strings[i] != strings[j] and patterns[i] = patterns[j] or
# strings[i] = strings[j] and patterns[j] != patterns[j] - this last condition
# threw me for a bit as an edge case! Need to ensure that each string is unique
# to each key, not just that each key corresponds to the given string!

# from a google interview set, apparently
def areFollowingPatterns(strings, patterns):
    pattern_to_string = {}
    string_to_pattern = {}
    for i in range(len(patterns)):
        # first, check condition that strings are equal for patterns[i]=patterns[j]
        this_pattern = patterns[i]
        if this_pattern in pattern_to_string:
            if strings[i] != pattern_to_string[this_pattern]:
                return False
        else:
            pattern_to_string[this_pattern] = strings[i]

    # now check condition that patterns are equal for strings[i]=strings[j]
    # if there are more keys than values, then there is not 1:1 correspondence
    return len(pattern_to_string.keys()) == len(set(pattern_to_string.values()))
