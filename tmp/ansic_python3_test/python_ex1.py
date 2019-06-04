class sumTo():
    """From sum to the input value"""
    
    START = 1
    
    def __init__(self, upTo=0):
        # constructor with one input parameter upTo
        self.upTo = upTo
    
    def value(self):
        # calculate the sum and return
        sum = 0
        # sum starts from 1 to upTo)
        try:
            for i in range(1, self.upTo+1):
                sum += i
        except:
            sum = 0
        return sum

# use sumTo class to create a object
a = sumTo(10)
print(a.value())
            