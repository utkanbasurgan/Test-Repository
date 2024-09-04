/**s
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time)
{
    let start = 1;
    let end = n;
    let rotation = "right";
    let current = 1;

    for (i=0; i<time; i++)
    {
        if (rotation == "right")
        {
            current = current + 1;
            console.log(current);
        }
        if (rotation == "left")
        {
            current = current - 1;
        }
        if (current == end)
        {
            rotation = "left";
        }
        if (current == start)
        {
            rotation = "right";
        }
    }

    return current;
};
