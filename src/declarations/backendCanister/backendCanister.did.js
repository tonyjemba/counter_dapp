export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getA' : IDL.Func([], [IDL.Nat], ['query']),
    'getB' : IDL.Func([], [IDL.Nat], ['query']),
    'voteA' : IDL.Func([], [IDL.Nat], []),
    'voteB' : IDL.Func([], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
