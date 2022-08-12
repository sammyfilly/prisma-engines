window.SIDEBAR_ITEMS = {"fn":[["h_cons","Takes an element and an Hlist and returns another one with the element prepended to the original list. The original list is consumed"],["lift_from","Free function version of `LiftFrom::lift_from`."]],"mod":[["foldr_owned","[`HFoldRightable`] inner mechanics for folding with a folder that needs to be owned."]],"struct":[["HCons","Represents the most basic non-empty HList. Its value is held in `head` while its tail is another HList."],["HNil","Represents the right-most end of a heterogeneous list"]],"trait":[["HFoldLeftable","Trait for performing a left fold over an HList"],["HFoldRightable","Trait for performing a right fold over an HList"],["HList","Typeclass for HList-y behaviour"],["HMappable","Trait for mapping over an HList"],["HZippable","Trait for zipping HLists"],["IntoTuple2","Trait for transforming an HList into a nested tuple."],["LiftFrom","Indexed type conversions of `T -> Self` with index `I`. This is a generalized version of `From` which for example allows the caller to use default values for parts of `Self` and thus “fill in the blanks”."],["LiftInto","An indexed conversion that consumes `self`, and produces a `T`. To produce `T`, the index `I` may be used to for example “fill in the blanks”. `LiftInto` is the reciprocal of `LiftFrom`."],["Plucker","Trait defining extraction from a given HList"],["Sculptor","Trait for pulling out some subset of an HList, using type inference."],["Selector","Trait for borrowing an HList element by type"]]};