> **Problem Practice:** Solving competitive programming frequency problems? Check out this [CodeChef Problem](https://www.codechef.com/practice/course/2to3stars/LP2TO308/problems/LISTLIST).

Python's official [collections documentation](https://docs.python.org/3/library/collections.html) defines `collections` as a built-in module implementing specialized container datatypes. It provides high-performance alternatives to Python's general-purpose containers (`dict`, `list`, `set`, and `tuple`).

---

## Specialized Containers Available

* **`namedtuple()`** — Factory function for creating tuple subclasses with named fields
* **`deque`** — Double-ended queue with fast appends and pops on both ends
* **`ChainMap`** — Dictionary-like class for creating a single view of multiple mappings
* **`Counter`** — Dict subclass for counting hashable objects
* **`OrderedDict`** — Dict subclass that remembers the order entries were added
* **`defaultdict`** — Dict subclass that calls a factory function to supply missing values
* **`UserDict` / `UserList` / `UserString`** — Wrappers around dictionary, list, and string objects for easier subclassing

---

## 1. ChainMap

### What is it?
Like the name suggests, `ChainMap` is a chain of maps (dictionaries). It links a series or history of mappings into a single, updateable view. This is particularly useful when tracking assignment history or managing stacked contexts and scopes.

### How to use it?
**Example:** Imagine running a car images website and tracking model images viewed by a user in a single session without hitting the database on every click.

```python
# 1st image viewed (2001 BMW M2)
map1 = {'brand': 'BMW', 'model': 'M2', 'year': 2001} 

# 2nd image viewed (Porsche RS3, year unknown)
map2 = {'brand': 'Porsche', 'model': 'RS3'} 

```

To aggregate session history locally and minimize database write latency:

```python
from collections import ChainMap

viewing_history = ChainMap(map1)
viewing_history = viewing_history.new_child(map2)

# Access the latest viewed image
print(viewing_history.maps[0]) 
# Output: {'brand': 'Porsche', 'model': 'RS3'}

```

> **Performance Tip:** Once your session history reaches a threshold (e.g., `len(viewing_history.maps) == 100`), bulk-dump the state to your database at once to reduce write frequency and database IOPS.
> 
> 

---

## 2. Counter

### What is it?

As the name implies, `Counter` counts! It automatically tallies hashable objects (words, characters, digits, tuples) and stores them in a dictionary subclass formatted as `{element: frequency}`.

### How to use it?

It excels whenever you need to find common elements or manipulate occurrence counts:

* **Literary Analysis:** Counting how many times Shakespeare used terms like *"thou"*, *"thee"*, *"the"*, or *"they"* across all works.


* **Algorithm Optimization:** Tackling frequency problems like [CodeChef LISTLIST](https://www.codechef.com/practice/course/2to3stars/LP2TO308/problems/LISTLIST).



Instead of writing boilerplate `for` loops with manual dictionary checks, replace all that logic with one line:

```python
from collections import Counter

# 1-line frequency tracking
counts = Counter(list_a)

```

*Unless you're a newbie who loves brute-forcing nested loops!*