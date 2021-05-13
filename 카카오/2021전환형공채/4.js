function solution(n, start, end, roads, traps) {
  let priority_queue = [];

  function comp(a, b) {
    return a.value < b.value;
  }

  function insert(target) {
    let point = priority_queue.length;
    priority_queue.push(target);

    while (point > 0) {
      let next = (point - 1) >> 1;
      if (comp(target, priority_queue[next])) {
        priority_queue[point] = priority_queue[next];
        point = next;
      } else {
        priority_queue[point] = target;
        break;
      }
    }
    priority_queue[point] = target;
  }

  function pop() {
    let result = priority_queue[0];
    let temp = priority_queue.pop();

    if (priority_queue.length === 0) {
      return result;
    }

    let point = 0;
    let left = 1;
    while (left < priority_queue.length) {
      let right = left + 1;

      if (right < priority_queue.length) {
        if (comp(priority_queue[right], priority_queue[left])) {
          priority_queue[point] = priority_queue[right];
          point = right;
          left = (point << 1) + 1;
          continue;
        }
      }

      priority_queue[point] = priority_queue[left];
      point = left;
      left = (point << 1) + 1;
    }
    priority_queue[point] = temp;

    return result;
  }

  let paths = [];
  for (let i = 0; i < n * 2; i++) {
    paths.push({});
  }

  for (let i = 0; i < roads.length; i++) {
    let road = roads[i];
    let from = road[0] - 1;
    let to = road[1] - 1;
    let weight = road[2];

    if (traps.includes(to + 1)) {
      if (paths[from][to + n]) {
        paths[from][to + n] = Math.min(paths[from][to + n], weight);
      } else {
        paths[from][to + n] = weight;
      }
    } else {
      if (paths[from][to]) {
        paths[from][to] = Math.min(paths[from][to], weight);
      } else {
        paths[from][to] = weight;
      }
    }

    if (traps.includes(from + 1)) {
      if (paths[to + n][from]) {
        paths[to + n][from] = Math.min(paths[to + n][from], weight);
      } else {
        paths[to + n][from] = weight;
      }
    } else {
      if (paths[to + n][from + n]) {
        paths[to + n][from + n] = Math.min(paths[to + n][from + n], weight);
      } else {
        paths[to + n][from + n] = weight;
      }
    }
  }

  let table = Array.from({ length: n * 2 }, () => -1);
  let result = 0;

  insert({ dest: start - 1, value: 0 });

  while (true) {
    let temp = pop();

    if (temp.dest === end - 1 || temp.dest === end - 1 + n) {
      result = temp.value;
      break;
    }

    if (table[temp.dest] === -1) {
      table[temp.dest] = temp.value;
    }

    for (let path in paths[temp.dest]) {
      insert({
        dest: parseInt(path),
        value: paths[temp.dest][path] + temp.value,
      });
    }
  }

  return result;
}
