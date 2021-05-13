string w[7] = {"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"};

string solution(string &s, int k)
{
    int idx = 0;
    for (idx = 0; i < w.size(); ++i)
    {
        if (w[idx] == s)
            break;
    }
    idx = (idx + k) % 7;
    return w[idx];
}

int solution(int n)
{
    string s = to_string(n);
    string dap = "";
    if (n < 0)
    {
        dap += "-";
        for (int i = 1; i < s.size(); ++i)
        {
            if (s[i] > '5')
            {
                dap += "5";
                dap += s.substr(i);
                return stoi(dap);
            }
            dap += s[i];
        }
    }
    else
    {
        for (int i = 0; i < s.size(); ++i)
        {
            if (s[i] < '5')
            {
                dap += "5";
                dap += s.substr(i);
                return stoi(dap);
            }
            dap += s[i];
        }
    }
    return stoi(dap + "5");
}