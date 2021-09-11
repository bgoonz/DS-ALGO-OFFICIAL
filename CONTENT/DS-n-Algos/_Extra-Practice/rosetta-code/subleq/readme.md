# Subleq

[FCC link](https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/subleq)

[Subleq](https://rosettacode.org/wiki/eso:Subleq) is an example of a
[One-Instruction Set Computer (OISC)](https://en.wikipedia.org/wiki/One_instruction_set_computer).

It is named after its only instruction, which is **SU**btract and **B**ranch if
**L**ess than or **EQ**ual

to zero.

Your task is to create an interpreter which emulates such a machine.

The machine's memory consists of an array of signed integers. Any reasonable
word size is fine, but the memory must be

able to hold negative as well as positive numbers.

Execution begins with the instruction pointer aimed at the first word, which is
address 0. It proceeds as follows:

1.  Let A, B, and C be the value stored in the three consecutive words in memory
    starting at the instruction pointer.
2.  Advance the instruction pointer 3 words to point at the address after the
    one containing C.
3.  If A is -1, then a character is read from standard input and its code point
    stored in the address given by B. C is unused.
4.  If B is -1, then the number contained in the address given by A is
    interpreted as a code point and the corresponding character output. C is
    again unused.
5.  Otherwise, both A and B are treated as the addresses of memory locations.
    The number contained in the address given by A is subtracted from the number
    at the address given by B (and the result stored back in address B). If the
    result is zero or negative, the value C becomes the new instruction pointer.
6.  If the instruction pointer becomes negative, execution halts.

Other negative addresses besides -1 may be treated as equivalent to -1, or
generate an error, as you see fit.

Your solution should accept a program to execute on the machine, separately from
the input fed to the program itself.

This program should be in raw subleq "machine code" - whitespace-separated
decimal numbers, with no symbolic names or

other assembly-level extensions, to be loaded into memory starting at address 0.
Show the output of your solution when

fed this "Hello, world!" program. (Note that the example assumes ASCII or a
superset of it, such as any of the Latin-N

character sets or Unicode. You may translate it into another character set if
your implementation is on a

non-ASCiI-compatible environment.)

15 17 -1 17 -1 -1 16 1 -1 16 3 -1 15 15 0 0 -1 72 101 108 108 111 44 32 119 111
114 108 100 33 10 0

Which corresponds to something like this in a hypothetical assembler language:

start: zero, message, -1 message, -1, -1 neg1, start+1, -1 neg1, start+3, -1
zero, zero, start zero: 0 neg1: -1 message: "Hello, world!\\n\\0"
