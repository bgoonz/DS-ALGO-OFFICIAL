# "Hard" question, supposed to take 30 min but took me almost 2 hours
# the zeros really threw me a curveball

# asked by MS, Uber, FB apparently


def mapDecoding(message):
    counts = [0, 1]
    size = len(message)

    # special cases
    if size == 0:
        return 1
    if int(message[0]) == 0:
        return 0
    if size == 1:
        return 1
    for i in range(size):
        if int(message[i]) == 0 and not (0 < int(message[i - 1]) <= 2):
            return 0

    former = int(message[0])
    last = int(message[1])
    if former == 1 and last != 0:
        counts.append(2)
    elif former == 2 and 0 < last <= 6:
        counts.append(2)
    else:
        counts.append(1)

    previous_op_count = counts[-1]

    for i in range(2, size):
        curr = int(message[i])
        if curr == 0:
            former = last
            last = curr
            while counts[-1] != previous_op_count:
                counts.pop()
            continue

        if 0 < former <= 2:
            if 0 < last <= 2:
                if (last == 2 and 0 < curr <= 6) or (last == 1 and 0 < curr):
                    previous_op_count = counts[-1]
                    counts.append((counts[-1] + counts[-2]) % (10 ** 9 + 7))
                else:
                    counts.append(counts[-1])
        elif (last == 2 and 0 < curr <= 6) or last == 1 and curr > 0:
            previous_op_count = counts[-1]
            counts.append(counts[-1] * 2 % (10 ** 9 + 7))
        else:
            counts.append(counts[-1])

        former = last
        last = curr

    return counts[-1]
